import { NEWS } from "../../app/shared/NEWS";

export const selectAllNews = () => {
    return NEWS;
};

export const selectNewsById = (id) => {
    return NEWS.find((news) => news.id === id);
};