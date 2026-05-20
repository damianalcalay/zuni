const assetPath = "/florales_raquel_assets";

type FloralAssetProps = {
  color: "white" | "gold" | "pink" | "roseGold";
  className: string;
  opacity?: string;
  src: string;
};

const colors = {
  white: "bg-white",
  gold: "bg-[#d8b46a]",
  pink: "bg-[#d98991]",
  roseGold: "bg-[#c99a63]",
};

function FloralAsset({
  color,
  className,
  opacity = "opacity-[0.7]",
  src,
}: FloralAssetProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute select-none ${colors[color]} ${opacity} ${className}`}
      style={{
        WebkitMaskImage: `url(${assetPath}/${src})`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskImage: `url(${assetPath}/${src})`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
      }}
    />
  );
}

export function FloralBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[112rem]">
        <FloralAsset
          className="-left-16 top-0 h-[26rem] w-[42rem]"
          color="white"
          opacity="opacity-[0.7]"
          src="floral_esquina_superior_izquierda.png"
        />
        <FloralAsset
          className="-right-20 top-2 h-[24rem] w-[42rem]"
          color="white"
          opacity="opacity-[0.6]"
          src="floral_esquina_superior_derecha.png"
        />
        <FloralAsset
          className="left-[8%] top-[17rem] h-36 w-52"
          color="gold"
          opacity="opacity-[0.3]"
          src="estampado_petalo_centro_inferior.png"
        />
        <FloralAsset
          className="right-[20%] top-[25rem] h-40 w-56"
          color="white"
          opacity="opacity-[0.45]"
          src="flor_pequena_superior_izquierda.png"
        />
        <FloralAsset
          className="-left-24 top-[43rem] h-[30rem] w-[40rem]"
          color="white"
          opacity="opacity-[0.5]"
          src="floral_esquina_inferior_izquierda.png"
        />
        <FloralAsset
          className="-right-16 top-[52rem] h-[29rem] w-[34rem]"
          color="gold"
          opacity="opacity-[0.25]"
          src="floral_esquina_inferior_derecha.png"
        />
        <FloralAsset
          className="left-[45%] top-[72rem] h-36 w-44"
          color="white"
          opacity="opacity-[0.42]"
          src="ramita_pequena_inferior_centro.png"
        />
        <FloralAsset
          className="right-[24%] top-[88rem] h-36 w-52"
          color="gold"
          opacity="opacity-[0.28]"
          src="estampado_petalo_derecha_inferior.png"
        />
      </div>

      <div className="absolute inset-x-0 top-[104rem] h-[190rem]">
        <FloralAsset
          className="-left-16 top-0 h-[25rem] w-[36rem]"
          color="pink"
          opacity="opacity-[0.34]"
          src="floral_esquina_superior_izquierda.png"
        />
        <FloralAsset
          className="-right-20 top-[16rem] h-[24rem] w-[38rem]"
          color="roseGold"
          opacity="opacity-[0.22]"
          src="floral_esquina_superior_derecha.png"
        />
        <FloralAsset
          className="left-[10%] top-[44rem] h-32 w-44"
          color="pink"
          opacity="opacity-[0.28]"
          src="flor_pequena_superior_izquierda.png"
        />
        <FloralAsset
          className="right-[12%] top-[58rem] h-36 w-52"
          color="roseGold"
          opacity="opacity-[0.22]"
          src="estampado_petalo_derecha_inferior.png"
        />
        <FloralAsset
          className="-left-24 top-[82rem] h-[30rem] w-[38rem]"
          color="pink"
          opacity="opacity-[0.3]"
          src="floral_esquina_inferior_izquierda.png"
        />
        <FloralAsset
          className="-right-24 top-[98rem] h-[29rem] w-[35rem]"
          color="pink"
          opacity="opacity-[0.3]"
          src="floral_esquina_inferior_derecha.png"
        />
        <FloralAsset
          className="left-[38%] top-[126rem] h-32 w-40"
          color="roseGold"
          opacity="opacity-[0.2]"
          src="ramita_pequena_inferior_centro.png"
        />
        <FloralAsset
          className="-left-20 top-[154rem] h-[26rem] w-[34rem]"
          color="pink"
          opacity="opacity-[0.24]"
          src="floral_esquina_superior_izquierda.png"
        />
        <FloralAsset
          className="-right-20 top-[166rem] h-[28rem] w-[35rem]"
          color="roseGold"
          opacity="opacity-[0.18]"
          src="floral_esquina_inferior_derecha.png"
        />
      </div>
    </div>
  );
}
