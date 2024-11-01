import immanuel from "@/app/imagens/immanuel.jpg"
import imagem1 from "@/app/imagens/imagem1.jpeg"
import imagem2 from "@/app/imagens/imagem2.jpg"
import imagem3 from "@/app/imagens/imagem3.jpg"
import imagem4 from "@/app/imagens/imagem4.png"
import error from "@/app/imagens/error.jpg"
import { NextResponse } from 'next/server';

const images = [
        { id: 0, img: immanuel},
        { id: 1, img: imagem1},
        { id: 2, img: imagem2},
        { id: 3, img: imagem3},
        { id: 4, img: imagem4},
        { id: 5, img: error},
];

export async function GET() {
    return NextResponse.json(images)
}