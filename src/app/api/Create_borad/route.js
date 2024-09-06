import { NextResponse } from "next/server";
import getHandler from "./get";
import postHandler from "./post";
import putHandler from "./put";
import deleteHandler from "./delete";
import db from "../../../lib/db";

export async function GET(request, context) {
  return getHandler(request, context);
}

export async function POST(request) {
  return postHandler(request);
}

export async function PUT(request, context) {
  return putHandler(request, context);
}

export async function DELETE(request, context) {
  return deleteHandler(request, context);
}
