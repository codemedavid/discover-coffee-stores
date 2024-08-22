import Image from "next/image"
import Link from "next/link";
type CardType = {
    name: string;
    imgUrl: string;
    href: string;
}
function Card({name, imgUrl, href} : CardType) {
  return (
    <Link href={href} className="flex p-4 rounded-md flex-col gap-2 hover:bg-blue-300 bg-blue-200">
      <h2 className="text-black">{name}</h2>
      <Image src={imgUrl} alt={name} width={260} height={160} blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACgCAYAAADq8hJGAAABdElEQVR42u3UQQEAAAQEsJNcdMTw2EKskukAnBICIARACIAQACEAQgCEAAgBEAIgBEAIgBAAIQBCAIQACAEQAiAEQAiAEAAhAEIAhAAIARACIARACIAQACEACAEQAiAEQAiAEAAhAEIAhAAIARACIARACIAQACEAQgCEAAgBEAIgBEAIgBAAIQBCAIQACAEQAiAEQAiAEIQACAEQAiAEQAiAEAAhAEIAhAAIARACIARACIAQACEAQgCEAAgBEAIgBEAIgBAAIQBCAIQACAEQAiAEQAiAEIQACAEQAiAEQAiAEAAhAEIAhAAIARACIARACIAQACEAQgCEAAgBEAIgBEAIgBAAIQBCAIQACAEQAiAEQAgAQgCEAAgBEAIgBEAIgBAAIQBCAIQACAEQAiAEQAiAEAAhAEIAhAAIARACIARACIAQACEAQgCEAAgBEAIgBCEAQgCEAAgBEAIgBEAIgBAAIQBCAIQACAEQAiAEQAiAEIBPFr/572Ey3eCRAAAAAElFTkSuQmCC" placeholder="blur"/>
    </Link>
  )
}

export default Card