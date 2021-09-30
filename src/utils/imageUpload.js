export const checkImageBeforeUpload = (file) => {
	let err = "";
	if (!file) {
		err = "File does not exist";
		return err;
	}
	if (file.type !== "image/jpeg" && file.type !== "image/png") {
		err = "File must be image type";
		return err;
	}
	if (file.size > 1 * 1024 * 1024) {
		err = "File must be smaller than 1MB";
		return err;
	}
	return err;
};

export const uploadImageCloudary = async (images) => {
	let arrImages = [];
	for (let image of images) {
		const formData = new FormData();
		formData.append("file", image);
		formData.append("upload_preset", "n2k0zv82");
		formData.append("cloud_name", "nam-instagram");

		const res = await fetch("https://api.cloudinary.com/v1_1/nam-instagram/image/upload", {
			method: "POST",
			body: formData
		});

		const data = await res.json();
		console.log("Data upload", data);
		arrImages.push({ public_id: data.public_id, url: data.secure_url });
	}
	return arrImages;
};
