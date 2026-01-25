
export const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1ABK_bx71Tlqw9qkggbhirTiinmoMs3TC";
    // Replace the above URL with your actual resume URL, e.g., from Google Drive or a public link.
    // If you add a 'resume.pdf' to your 'public' folder, you can use "/resume.pdf" instead.

    window.open(resumeUrl, '_blank');
};