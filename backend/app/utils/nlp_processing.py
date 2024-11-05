import spacy

# Load the NLP model
nlp = spacy.load("en_core_web_sm")

def extract_skills(resume_text):
    doc = nlp(resume_text)
    skills = [ent.text for ent in doc.ents if ent.label_ == "SKILL"]
    return skills
