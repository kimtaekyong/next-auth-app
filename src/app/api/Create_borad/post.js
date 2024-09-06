import db from "../../../lib/db";
import { NextResponse } from "next/server";

export default async function postHandler(request) {
  const { title, author, content } = await request.json();
  try {
    const [result] = await db.query("INSERT INTO create_borad (title, author, content) VALUES (?, ?, ?)", [
      title,
      author,
      content,
    ]);
    return NextResponse.json({ id: result.insertId, title, author, content, created_at: new Date() }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Database insert failed" }, { status: 500 });
  }
}
