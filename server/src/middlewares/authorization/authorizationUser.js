export default function (req, res, next) {
  try {
    req.authorizeDate = req.get('Authorization');
    if (req.authorizeDate){
      next();
    }else {
      next
    }
  }catch (e) {

  }
}