import { NextResponse } from "next/server";
import db from "../../../lib/db";

export default async function getHandler(request, { params }) {
  const { id } = params || {};

  if (id) {
    try {
      const [rows] = await db.query("SELECT * FROM create_borad WHERE id = ?", [id]);
      if (rows.length === 0) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }
      return NextResponse.json(rows[0]);
    } catch (error) {
      return NextResponse.json({ error: "Database query failed" }, { status: 500 });
    }
  } else {
    try {
      const [rows] = await db.query("SELECT * FROM create_borad");
      return NextResponse.json(rows);
    } catch (error) {
      return NextResponse.json({ error: "Database query failed" }, { status: 500 });
    }
  }
}
