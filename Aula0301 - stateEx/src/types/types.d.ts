export interface IData {
  id: datakind;
  fotos: Array<{
    titulo: string;
    src: string;
  }>;
  nome: string;
  preco: string;
  descricao: string;
  vendido: string;
  usuario_id: string;
}

export type datakind = "tablet" | "phone" | "notebook";
