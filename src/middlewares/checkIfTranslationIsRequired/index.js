export const checkIfTranslationIsRequired = (req, _res, next) => {
  const language = req.get("Accept-Language")?.substring(0, 2) ?? "en";
  if (language != "en") req.translate = language;
  return next();
}