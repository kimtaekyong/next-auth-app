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
