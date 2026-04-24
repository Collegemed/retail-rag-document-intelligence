const API_URL = "http://127.0.0.1:8000"

// ── Drag & drop wiring ──────────────────────────────────────────
const dropArea = document.getElementById("dropArea")
const pdfFile  = document.getElementById("pdfFile")

dropArea.addEventListener("dragover", e => {
  e.preventDefault()
  dropArea.style.borderColor = "var(--accent2)"
  dropArea.style.background  = "rgba(232,213,163,0.05)"
})
dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderColor = ""
  dropArea.style.background  = ""
})
dropArea.addEventListener("drop", e => {
  e.preventDefault()
  dropArea.style.borderColor = ""
  dropArea.style.background  = ""
  const files = e.dataTransfer.files
  if (files.length) {
    pdfFile.files = files
    showFileName(files[0].name)
  }
})

pdfFile.addEventListener("change", () => {
  if (pdfFile.files[0]) showFileName(pdfFile.files[0].name)
})

function showFileName(name) {
  document.querySelector(".drop-label").textContent = name
  document.querySelector(".drop-sub").textContent   = "Ready to upload"
}

// ── Upload ──────────────────────────────────────────────────────
async function uploadPDF() {
  const file   = pdfFile.files[0]
  const status = document.getElementById("uploadStatus")
  const dot    = document.getElementById("statusDot")

  if (!file) {
    setStatus(status, "Please select a file first.", "error")
    return
  }

  const formData = new FormData()
  formData.append("file", file)

  setStatus(status, "Uploading…", "")
  dot.className = "status-dot loading"

  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    })
    const data = await response.json()

    setStatus(status, data.message || "Uploaded successfully!", "success")
    dot.className = "status-dot active"

    // Show doc badge in sidebar
    const docInfo = document.getElementById("docInfo")
    document.getElementById("docName").textContent = file.name
    docInfo.style.display = "block"

    // Clear empty state
    const empty = document.getElementById("emptyState")
    if (empty) empty.remove()

  } catch (err) {
    setStatus(status, "Upload failed. Is the server running?", "error")
    dot.className = "status-dot"
  }
}

// ── Ask ─────────────────────────────────────────────────────────
async function askQuestion() {
  const input = document.getElementById("questionInput")
  const chat  = document.getElementById("chatContainer")
  const dot   = document.getElementById("statusDot")
  const question = input.value.trim()

  if (!question) return

  // Remove empty state if still present
  const empty = document.getElementById("emptyState")
  if (empty) empty.remove()

  addMessage(question, "user")
  input.value = ""

  // Thinking bubble
  const thinking = addMessage("Thinking", "bot thinking")
  dot.className = "status-dot loading"

  try {
    const response = await fetch(`${API_URL}/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    })
    const data = await response.json()

    thinking.remove()
    dot.className = "status-dot active"
    addMessage(data.answer, "bot")

  } catch (err) {
    thinking.remove()
    dot.className = "status-dot"
    addMessage("Could not reach the server. Make sure the backend is running.", "bot")
  }
}

// ── Helpers ─────────────────────────────────────────────────────
function addMessage(text, classes) {
  const chat = document.getElementById("chatContainer")
  const msg  = document.createElement("div")
  msg.className = "message " + classes
  msg.innerText = text
  chat.appendChild(msg)
  chat.scrollTop = chat.scrollHeight
  return msg
}

function setStatus(el, text, type) {
  el.textContent = text
  el.className   = "upload-status " + type
}