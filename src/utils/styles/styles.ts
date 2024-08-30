export const getStatusStyle = (status: string) => {
  switch (status) {
    case "In Progress":
      return {
        color: "#0073B4CC",
        borderRadius: 8,
        padding: 1,
      };
    case "Completed":
      return {
        color: "#138600CC",
        padding: 10,
        borderRadius: 8,
        textAliign: "center",
        justifyContent: "center",
        //
      };
    case "Critical":
      return {
        color: "#B40000CC",
        padding: 10,
        borderRadius: 8,
        textAliign: "center",
        justifyContent: "center",
        //
      };
    default:
      return {};
  }
};
