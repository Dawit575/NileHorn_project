import {
  getAllPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../model/portfolioModel.js';

export const getAll = (req, res) => {
  getAllPortfolio((error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'Database error',
        error,
      });
    }

    return res.status(200).json(result);
  });
};

export const getById = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'ID is required',
    });
  }

  getPortfolioById(id, (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'Database error',
        error,
      });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({
        message: 'Portfolio not found',
      });
    }

    return res.status(200).json(result[0]);
  });
};

export const addPortfolio = (req, res) => {
  const { title, description, image, github_link, live_link } = req.body;

  if (!title || !description || !image || !github_link || !live_link) {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }

  createPortfolio(req.body, (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'Database error',
        error,
      });
    }

    return res.status(201).json({
      message: 'Portfolio created successfully',
      id: result.insertId,
    });
  });
};

export const editPortfolio = (req, res) => {
  const { id } = req.params;

  const { title, description, image, github_link, live_link } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'ID is required',
    });
  }

  if (!title || !description || !image || !github_link || !live_link) {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }

  updatePortfolio(id, req.body, (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'Database error',
        error,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Portfolio not found',
      });
    }

    return res.status(200).json({
      message: 'Portfolio updated successfully',
    });
  });
};

export const delete_portfolio = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'ID is required',
    });
  }

  deletePortfolio(id, (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'Database error',
        error,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Portfolio not found',
      });
    }

    return res.status(200).json({
      message: 'Portfolio deleted successfully',
    });
  });
};
