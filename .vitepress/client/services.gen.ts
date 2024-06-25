// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { GetNavDatasResponse, CreateNavDataResponse, RegisterData, RegisterResponse, LoginData, LoginResponse, LogoutResponse, GetUserInfoResponse, GetProductsResponse, CreateProductData, CreateProductResponse, GetOrdersResponse, CreateOrderData, CreateOrderResponse, UpdateOrderData, UpdateOrderResponse, GetWalletResponse } from './types.gen';

/**
 * 获取导航数据
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const getNavDatas = (): CancelablePromise<GetNavDatasResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/v1/nav_datas'
}); };

/**
 * Create Nav Data
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const createNavData = (): CancelablePromise<CreateNavDataResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/v1/nav_datas'
}); };

/**
 * Register
 * @param data The data for the request.
 * @param data.name
 * @param data.password
 * @param data.ensurePassword
 * @returns UserOut Successful Response
 * @throws ApiError
 */
export const register = (data: RegisterData): CancelablePromise<RegisterResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/v1/auth/register',
    query: {
        name: data.name,
        password: data.password,
        ensure_password: data.ensurePassword
    },
    errors: {
        422: 'Validation Error'
    }
}); };

/**
 * Login
 * @param data The data for the request.
 * @param data.name
 * @param data.password
 * @returns UserOut Successful Response
 * @throws ApiError
 */
export const login = (data: LoginData): CancelablePromise<LoginResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/v1/auth/login',
    query: {
        name: data.name,
        password: data.password
    },
    errors: {
        422: 'Validation Error'
    }
}); };

/**
 * Logout
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const logout = (): CancelablePromise<LogoutResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/v1/auth/logout'
}); };

/**
 * Get User Info
 * @returns UserOut Successful Response
 * @throws ApiError
 */
export const getUserInfo = (): CancelablePromise<GetUserInfoResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/v1/auth/userinfo'
}); };

/**
 * Get Products
 * @returns Product Successful Response
 * @throws ApiError
 */
export const getProducts = (): CancelablePromise<GetProductsResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/v1/shop/products'
}); };

/**
 * Create Product
 * @param data The data for the request.
 * @param data.requestBody
 * @returns Product Successful Response
 * @throws ApiError
 */
export const createProduct = (data: CreateProductData): CancelablePromise<CreateProductResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/v1/shop/products',
    body: data.requestBody,
    mediaType: 'application/json',
    errors: {
        422: 'Validation Error'
    }
}); };

/**
 * Get Orders
 * @returns Order Successful Response
 * @throws ApiError
 */
export const getOrders = (): CancelablePromise<GetOrdersResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/v1/shop/orders'
}); };

/**
 * Create Order
 * @param data The data for the request.
 * @param data.productId
 * @returns Order Successful Response
 * @throws ApiError
 */
export const createOrder = (data: CreateOrderData): CancelablePromise<CreateOrderResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/v1/shop/orders',
    query: {
        product_id: data.productId
    },
    errors: {
        422: 'Validation Error'
    }
}); };

/**
 * Update Order
 * @param data The data for the request.
 * @param data.orderNo
 * @param data.payStatus
 * @returns Order Successful Response
 * @throws ApiError
 */
export const updateOrder = (data: UpdateOrderData): CancelablePromise<UpdateOrderResponse> => { return __request(OpenAPI, {
    method: 'PUT',
    url: '/api/v1/shop/order/{order_no}',
    path: {
        order_no: data.orderNo
    },
    query: {
        pay_status: data.payStatus
    },
    errors: {
        422: 'Validation Error'
    }
}); };

/**
 * Get Wallet
 * @returns Wallet Successful Response
 * @throws ApiError
 */
export const getWallet = (): CancelablePromise<GetWalletResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/v1/shop/wallet'
}); };