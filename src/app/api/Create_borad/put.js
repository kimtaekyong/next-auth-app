import db from "../../../lib/db";
import { NextResponse } from "next/server";

export default async function putHandler(request, { params }) {
  const { id } = params;
  const { title, author, content } = await request.json();
  try {
    await db.query("UPDATE create_borad SET title = ?, author = ?, content = ? WHERE id = ?", [
      title,
      author,
      content,
      id,
    ]);
    return NextResponse.json({ id, title, author, content });
  } catch (error) {
    return NextResponse.json({ error: "Database update failed" }, { status: 500 });
  }
}
