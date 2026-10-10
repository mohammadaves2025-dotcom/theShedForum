import mongoose from 'mongoose';

// Connection cache for Vercel Serverless & Local development reuse
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    // Graceful offline mode when URI is not yet provided
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      console.log('=======================================================');
      console.log('✓ [MongoDB Atlas] Cloud Database Connected Successfully!');
      console.log('=======================================================');
      return mongooseInstance;
    }).catch((err) => {
      console.error('✗ [MongoDB Atlas] Connection error:', err.message);
      cached.promise = null;
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
}

export function isConnected() {
  return mongoose.connection && mongoose.connection.readyState === 1;
}
