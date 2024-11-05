from fastapi import FastAPI, UploadFile, File
from app.api.routes.job_match import job_match_router

app = FastAPI()

@app.post("/api/upload")
async def upload_resume(file: UploadFile = File(...)):
    # For now, just return the filename
    return {"filename": file.filename}

app.include_router(job_match_router, prefix="/api/job_match")
