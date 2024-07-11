import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const OTPInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.blant};
  background: ${({ theme }) => theme.bg.dark};
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary[100]};
  }
`;

const OTPField = ({
  otpStr,
  length,
  onChange,
  onComplete,
}: {
  otpStr: string;
  length: number;
  onChange: (otp: string) => void;
  onComplete: (otp: string) => void;
}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (otpStr === "") {
      setOtp(Array(length).fill(""));
    }
  }, [otpStr]);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(""));

      if (value !== "" && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }

      if (newOtp.join("").length === length) {
        onComplete(newOtp.join(""));
      }
    }
  };

  const handleBackspace = (e: any, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: any) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = pasteData.split("").slice(0, length);

    // Fill the remaining length with empty strings
    for (let i = newOtp.length; i < length; i++) {
      newOtp.push("");
    }

    setOtp(newOtp);
    onChange(newOtp.join(""));
    if (newOtp.join("").length === length) {
      onComplete(newOtp.join(""));
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
      {otp.map((digit, index) => (
        <OTPInput
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el!)}
        />
      ))}
    </div>
  );
};

export default OTPField;
