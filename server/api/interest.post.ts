interface Interest {
  name: String;
  email: String;
  phone: String;
  origin: String;
}

import Airtable from "airtable";

export default defineEventHandler(async (event) => {
  const data = await readBody<Interest>(event);

  try {
    await new Airtable()
      .base("app4oQ5iAyXDlx8Qs")
      .table("tblLt8XRpHJtBK5li")
      .create(data);

    return setResponseStatus(event, 202);
  } catch (error) {
    let statusMessage = "Unknown Error";
    if (error instanceof Airtable.Error) statusMessage = error.message;

    return setResponseStatus(event, 400, statusMessage);
  }
});
