import { parseISO, formatRelative, formatDistance } from "date-fns";
import { ptBR } from "date-fns/esm/locale";

export default function Format(date: Date) {

  const parsedDate = parseISO(date.toString());
  const baseDate = new Date();

  const formatedDate = formatDistance(parsedDate, baseDate, {
    locale: ptBR
  });


  return formatedDate;
}