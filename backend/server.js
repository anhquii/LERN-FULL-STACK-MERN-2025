import express from "express";

const app = express();

app.listen(5001, () => {
    console.log("server bat dau tren cong 5001");
});

app.get("/api/tasks", ( resquest, reponse) =>{
    reponse.status(200).send("Bạn có 1000 việt cần làm");
});

app.post("/api/tasks", (res, req) => {
    res.status(201).json({message: "Nhiệm vụ đã được thêm vào thành công"});
});

app.put("/api/tasks/:id", (res, req) => {
    res.status(201).json({message: "Nhiệm vụ đã được update vào thành công"});
});

app.delete("/api/tasks", (res, req) => {
    res.status(201).json({message: "Nhiệm vụ đã được xóa vào thành công"});
});