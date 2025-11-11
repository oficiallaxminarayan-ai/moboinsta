import express from 'express';
import { getInstagramVideoInfo } from '../utils/instagram.js';

const router = express.Router();

/**
 * POST /api/download
 * Fetch Instagram video information
 */
router.post('/download', async (req, res) => {
  try {
    const { url } = req.body;

    // Validate request
    if (!url) {
      return res.status(400).json({
        success: false,
        error: 'URL is required'
      });
    }

    // Validate URL format
    if (typeof url !== 'string' || url.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid URL format'
      });
    }

    // Fetch video information
    const result = await getInstagramVideoInfo(url.trim());

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: result.error
      });
    }

    // Return video information
    return res.status(200).json({
      success: true,
      data: result.data
    });

  } catch (error) {
    console.error('Error in /api/download:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

/**
 * GET /api/health
 * Health check endpoint
 */
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Moboinsta API is running',
    timestamp: new Date().toISOString()
  });
});

export default router;
