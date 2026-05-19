import { getAllPortfolio,
        getPortfolioById,
        createPortfolio,
        updatePortfolio,
        deletePortfolio } from "../model/portfolioModel.js";

export const getAll = (req,res) => {
  getAllPortfolio((error, result) => {
    if(error) {
      return res.status(500).json({ message: 'Database error', error });
    }
    return res.status(200).json(result);
  })
}

export const getById = (req,res) => {
  getPortfolioById(req.params.id,(error,result) => {
    if (error) {
      return res.status(500).json({ message: 'Database error', error });
    }

    if(result.length === 0){
      return res.status(404).json({ message: 'Portfolio is not found.' });
    }

    return res.status(200).json(result[0]);
  })
}

export const addPortfolio = (req,res) => {
  createPortfolio(req.body,(error,result) =>{
    if (error) {
      return res.status(500).json({ message: 'Database error', error });
    }

    return res.status(201).json({
      message:"Your portfolio is created successfully.",
      id:result.insertId
    })
  })
}

export const editPortfolio = (req,res) => {
  updatePortfolio(req.params.id,req.body,(error,result) => {
    if (error) {
      return res.status(500).json({ message: 'Database error', error });
    }

    if(result.affectedRows === 0){
      return res.status(404).json({ message: 'Portfolio is not found.',error });
    }

    return res.status(200).json({message:"Your portfolio is updated successfully."})
  })
}

export const delete_portfolio = (req,res) => {
  deletePortfolio(req.params.id,(error,result) => {
        if (error) {
          return res.status(500).json({ message: 'Database error', error });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Portfolio is not found.' });
        }

        return res.status(200).json({ message: 'Portfolio deleted successfully.' });
  })

}
