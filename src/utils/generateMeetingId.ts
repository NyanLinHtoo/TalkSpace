export const generateMeetingId = () => {
  let meetingId = "";
  const chars = "1234567890qwertyuioplkjhgfdsazxcvbnm";
  const maxPos = chars.length;

  for (let i = 0; i < 8; i++) {
    meetingId += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return meetingId;
};
