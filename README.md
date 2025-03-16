# Serverless Image Resizer using S3, API Gateway & Lambda

## Overview
This project is a **serverless image resizer** that automatically resizes images uploaded to an **Amazon S3 bucket**. It utilizes **AWS Lambda** for processing, **API Gateway** for access, and stores the resized images back in S3.

## Tech Stack
- **AWS S3** – Stores original and resized images  
- **AWS Lambda** – Resizes images on demand  
- **API Gateway** – Exposes an endpoint for requesting resized images  
- **Node.js** – Runs the Lambda function  
- **Sharp** – Image processing library  

## Features
✅ Automatically resizes images on upload  
✅ Supports multiple image formats (JPEG, PNG, WebP, etc.)  
✅ Uses **AWS Lambda** to process images without managing servers  
✅ Returns optimized images via API Gateway  
✅ Stores resized images in a separate S3 folder  

## Architecture
1. **User uploads an image to the S3 bucket.**  
2. **S3 triggers a Lambda function.**  
3. **Lambda processes & resizes the image using Sharp.**  
4. **Resized image is stored in another S3 folder.**  
5. **User can access resized images via API Gateway.**  

---

## Setup & Deployment

### 1. Prerequisites
Ensure you have:  
- **AWS Account** (Free Tier supported)  
- **Node.js & npm installed**  
- **AWS CLI configured**  
- **Serverless Framework (optional, for easier deployment)**  

### 2. Clone the Repository
```sh
git clone https://github.com/your-username/serverless-image-resizer.git
cd serverless-image-resizer
```
### 3. Install Dependencies
```
npm install
```
### 5. Configure AWS Services

** Create an S3 Bucket for storing images **
** Set up API Gateway to expose an endpoint **
** Deploy Lambda Function with necessary permissions **

### 6. Deploy Using Serverless Framework (Optional)
 ** If using Serverless Framework, deploy with: **
 ```
serverless deploy
```

### Usage
 ** Uploading an Image **
** Upload an image to the S3 bucket via AWS Console or SDK. **
** The Lambda function resizes and saves it.**
### Accessing Resized Image
** Use API Gateway to get the resized image:**
```
https://your-api-gateway-url.com/resize?key=your-image.jpg&width=300&height=200
```

### Contributors:
### Rafiya
### Krutika
