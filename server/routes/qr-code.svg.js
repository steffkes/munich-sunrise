import qrcode from "qrcode";
import { event } from "@/event.js";

const url = new URL(event.url);
url.searchParams.set("utm_source", "website");

export default defineEventHandler(async (event) => {
  setResponseHeader(event, "Content-Type", "image/svg+xml");
  return await await qrcode.toString(url.toString(), { type: "svg" });
});
