import React, { useEffect, useState } from "react";
import useAuthApi from "../../hooks/queries/useAuthApi";
import useUserInfoMutate from "../../hooks/queries/useUserInfoMutate";

export interface useSettingsProps {
  userInfo: any;
  displayNameInputVal: string | null;
  handleDisplayNameChange: (e: any) => void;
  handleDisplayNameUpdate: () => Promise<void>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: string;
  handleThemeSelect: (num: 0 | 1) => void;
}

export const useSettingsContextInit: useSettingsProps = {
  userInfo: null,
  displayNameInputVal: null,
  handleDisplayNameChange: () => {},
  handleDisplayNameUpdate: () => Promise.resolve(),
  handleFileChange: () => {},
  status: "",
  handleThemeSelect: () => {},
};

const useSettings = (): useSettingsProps => {
  const [status, setStatus] = useState("");
  const { userInfo } = useAuthApi();
  const {
    updateUserDisplayNameMutate,
    updateUserImageMutate,
    updateUserThemeMutate,
  } = useUserInfoMutate();
  const [displayNameInputVal, setDisplayNameInputVal] = useState<string | null>(
    null
  );
  const handleDisplayNameChange = (e: any) => {
    setDisplayNameInputVal(e.target.value);
  };
  const handleDisplayNameUpdate = async () => {
    if (displayNameInputVal) {
      updateUserDisplayNameMutate(displayNameInputVal, {
        onSuccess: () => setStatus("Name updated successfully!"),
        onError: () => setStatus("Error updating the name."),
      });
      setStatus("Updating name...");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"]; // Allowed MIME types
      if (allowedTypes.includes(file.type)) {
        setStatus("Uploading image...");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = reader.result as string;
          updateUserImageMutate(base64String, {
            onSuccess: () => setStatus("Image uploaded successfully!"),
            onError: () => setStatus("Error uploading the image."),
          });
        };
        reader.onerror = (error) => {
          console.error("Error reading the file:", error);
        };
      } else {
        console.error(
          "Unsupported file format. Please upload a JPEG or PNG file."
        );
      }
    }
  };

  useEffect(() => {
    setDisplayNameInputVal(null);
  }, [userInfo.displayName]);

  useEffect(() => {
    if (userInfo.image) {
      setDisplayNameInputVal(null);
    }
  }, [userInfo.image]);
  return {
    userInfo,
    displayNameInputVal,
    handleDisplayNameChange,
    handleDisplayNameUpdate,
    handleFileChange,
    status,
    handleThemeSelect: (num: 0 | 1) => updateUserThemeMutate(num),
  };
};

export default useSettings;
