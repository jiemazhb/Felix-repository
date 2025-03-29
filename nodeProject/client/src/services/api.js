

export const passengerRegister = async (formData) => {
    console.log(formData, "call fd api");
    
    const response = await fetch("/api/passengers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      console.log("nooo ");
      
      throw new Error("Failed to login. Please check your details and try again.");
    }
  
    return response.json();
  };
  