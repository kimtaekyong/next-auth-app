import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const [rows] = await db.query("SELECT * FROM create_borad WHERE id = ?", [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ error: "Database query failed" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
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

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await db.query("DELETE FROM create_borad WHERE id = ?", [id]);
    return NextResponse.json({ message: "Item deleted" }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "Database delete failed" }, { status: 500 });
  }
}
