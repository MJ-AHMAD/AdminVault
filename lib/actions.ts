"use server"

export async function sendContactForm(formData: FormData) {
  // Simulate server processing time
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Log the form data
  console.log("Contact form submission received")

  return { success: true, message: "Message sent successfully!" }
}

export async function sendFeedback(formData: FormData) {
  // Simulate server processing time
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Log the form data
  console.log("Feedback submission received")

  return { success: true, message: "Feedback submitted successfully!" }
}
