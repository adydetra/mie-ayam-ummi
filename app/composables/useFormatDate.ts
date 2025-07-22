export default function () {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    const monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate: string = `${Number.parseInt(day)} ${monthNames[Number.parseInt(month) - 1]} ${Number.parseInt(year)}`;
    return formattedDate;
  };
  return formatDate;
}
