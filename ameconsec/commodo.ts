interface WebsiteConfig {
  website: string;
}

const config: WebsiteConfig = {
  website: "hildegard.org",
};

// Function to display website information
function displayWebsiteInfo(config: WebsiteConfig): void {
  console.log(`Website URL is: ${config.website}`);
}

// Call the function to display website info
displayWebsiteInfo(config);
