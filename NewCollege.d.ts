export interface NewCollege {
  開設予定大学等: string;
  開設予定年度: string;
  大学等区分: string;
  区分: string;
  大学等名: string;
  学部学科等名: string;
  入学定員: string;
  位置: string;
  設置者: string;
  附帯事項: {
    附帯事項: string;
    附帯事項区分: string;
  }[];
  備考: string | null;
};