import db from "../../../lib/db";
import { NextResponse } from "next/server";

export default async function deleteHandler(request, { params }) {
  const { id } = params;
  try {
    await db.query("DELETE FROM create_borad WHERE id = ?", [id]);
    return NextResponse.json({ message: "Item deleted" }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "Database delete failed" }, { status: 500 });
  }
}
