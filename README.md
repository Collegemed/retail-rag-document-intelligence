 Chat with Retail Documents (RAG)

 Overview

    This project is an AI-powered Retail Document Intelligence System built using Retrieval-Augmented Generation (RAG). It enables users to interact with large volumes of unstructured retail documents (PDFs, manuals, reports) using natural language queries.

    The system combines semantic search, vector databases, and Large Language Models (LLMs) to deliver accurate, context-aware answers directly from uploaded documents.

Problem Statement

    Retail organizations deal with vast amounts of unstructured documents such as:

    Product manuals
    Policy documents
    Reports and invoices

Traditional keyword-based search systems:

    Fail to understand query intent
    Return irrelevant results
    Increase manual effort and time
 
This project solves the problem using:

    Semantic search
    Context-aware AI responses
    Retrieval-Augmented Generation (RAG)

Source:

Objectives

    Build an intelligent document query system
    Replace keyword search with semantic search
    Implement RAG-based architecture
    Ensure accurate, context-grounded responses
    Reduce hallucination in AI outputs
    Enable scalable document processing
Key Features
   
    Upload documents (PDFs, reports, manuals)
    Semantic search using embeddings
    Chat-based interaction with documents
    AI-powered question answering
    Fast retrieval using vector databases
    Text chunking & embedding generation
    Support for FAISS / ChromaDB
    Secure document handling
    Scalable and modular architecture
    System Architecture

User Query → Embedding → Vector Database Search
          → Retrieve Relevant Chunks
          → LLM (RAG) → Context-Aware Answer

Workflow 

    Documents are uploaded and processed
    Text is extracted and split into chunks
    Embeddings are generated
    Stored in a vector database (FAISS/Chroma)
    User query is converted into embedding
    Relevant chunks are retrieved
    LLM generates final response

The architecture diagram on page 5 clearly shows this pipeline from document ingestion → embedding → retrieval → LLM response.

Tech Stack

    Layer	Technology
    Backend	Python, FastAPI
    Server	Uvicorn
    AI Framework	LangChain
    LLM Integration	Groq API
    Embeddings	Sentence Transformers
    Vector DB	ChromaDB / FAISS
    Frontend	HTML, CSS, JavaScript
    API Handling	Fetch API
    Environment	Python venv


Installation & Setup

    Clone Repository
     git clone <repository-url>
     cd rag-retail-chatbot

    Create Virtual Environment
     python -m venv venv
     source venv/bin/activate   # Linux/Mac
     venv\Scripts\activate      # Windows
    
    Install Dependencies
     pip install -r requirements.txt
    
    Run Application
     uvicorn main:app --reload

Key Outcomes
     
    Intelligent document querying system
    Accurate and context-aware responses
    Reduced manual search effort
    Improved decision-making efficiency
    Practical implementation of RAG architecture

Limitations
    
    No multimedia support (images/audio/video)
    No advanced model fine-tuning
    Limited enterprise-level security
    Not optimized for large-scale distributed deployment

Future Enhancements
 
    Advanced LLM fine-tuning
    Multi-format support (Word, Excel, images)
    Cloud deployment (AWS/Azure)
    Real-time data integration
    Authentication & personalization
    Voice-based interaction
    Multilingual support
    Feedback-based learning system

Contributors

    Aditya Agrawal 
    Atharv Shukla
    Verma Nikhil Kumar Vipin Kumar
    Malya Singh
    Mohit Gupta

Institution: Medicaps University
Course: Generative AI – Datagami Skill Based Course
Project Number: GAI-41
Group: 03D12

Conclusion

    This project demonstrates a real-world application of Generative AI and RAG architecture to solve document retrieval challenges in the retail domain. By combining semantic search, embeddings, and LLMs, the system delivers efficient, scalable, and intelligent document interaction
