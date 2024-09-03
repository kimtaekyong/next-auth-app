import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM create_borad");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json({ error: "Database query failed" }, { status: 500 });
  }
}

export async function POST(request) {
  const { title, author, content } = await request.json();
  try {
    const [result] = await db.query("INSERT INTO create_borad (title, author, content) VALUES (?, ?, ?)", [
      title,
      author,
      content,
    ]);
    return NextResponse.json({ id: result.insertId, title, author, content, created_at: new Date() }, { status: 201 });
  } catch (error) {
    console.error("Database insert failed:", error);
    return NextResponse.json({ error: "Database insert failed" }, { status: 500 });
  }
}
