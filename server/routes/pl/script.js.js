export default defineEventHandler((event) => {
  setResponseHeader(event, "Content-Type", "text/javascript");
  return "/* pl/script.js */";
});
