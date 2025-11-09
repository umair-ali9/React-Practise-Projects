import confg from '../confg.js';
import { Client, ID, Databases, Storage, Query, TablesDB } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(confg.appwriteUrl)
            .setProject(confg.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.TablesDB.createRow({
                databasesId: confg.databasesId,
                tableId: confg.collectionId,
                rowId: ID.unique(),
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    slug,
                }
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(postId, { title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.TablesDB.updateRow({
                databasesId: confg.databasesId,
                tableId: confg.collectionId,
                rowId: postId,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    slug,
                }
            });
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            throw error;
        }
    }

    async deletePost(postId) {
        try {
            await this.TablesDB.deleteRow({
                databasesId: confg.databasesId,
                tableId: confg.collectionId,
                rowId: postId,
            })
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            throw error;
            return false;
        }
    }

    async getPost(postId) {
        try {
            const response = await this.TablesDB.getRows({
                databasesId: confg.databasesId,
                tableId: confg.collectionId,
                rowId: postId,
            });
            return response;
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            throw error;
        }
    }

    async getPosts(queries = [Query.select('status', 'published')]) {
        try {
            const response = await this.TablesDB.listRows({
                databasesId: confg.databasesId,
                tableId: confg.collectionId,
                queries,
            });
            return response;
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            throw error;
        }
    }

}

const service = new Service()

export default service;