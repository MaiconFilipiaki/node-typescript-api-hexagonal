import ApiError from "../../../exception/ApiError";

export default (schema) => {
  return async (req, res, next) => {
    try {
      const validateBody = await schema.validate(req.body, {
        abortEarly: false,
      });
      req.body = validateBody;
      next();
    } catch (err) {
      const errors = err.inner.map((error) => {
        return {
          field: error.path,
          errors: error.errors,
        };
      });
      console.log(ApiError.roleBusiness(errors));
      res.send(ApiError.roleBusiness(errors));
    }
  };
};
