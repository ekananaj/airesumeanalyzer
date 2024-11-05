from fastapi import APIRouter

job_match_router = APIRouter()

@job_match_router.get("/")
async def get_job_matches():
    # Placeholder for NLP logic
    return [{"title": "Software Engineer", "relevance": "95%"}]
