// import nextConnect from "next-connect";
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // 업로드 설정
// const uploadDir = path.join(process.cwd(), "public/uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const upload = multer({
//   dest: uploadDir,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB 크기 제한
// });

// // NextConnect와 Multer 설정
// const handler = nextConnect({
//   onError(err, req, res) {
//     console.error(err.stack);
//     res.status(500).end("Something went wrong!");
//   },
//   onNoMatch(req, res) {
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   },
// })
//   .use(upload.single("file")) // 'file'은 클라이언트에서 전송하는 필드 이름입니다
//   .post((req, res) => {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const fileName = file.filename;
//     const imageUrl = `/uploads/${fileName}`;

//     res.status(200).json({ imageUrl });
//   });

// export { handler as POST };
