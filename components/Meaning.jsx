import Image from "next/image";
import React from "react";

const Meaning = ({ data }) => {
  const audioSource = data
    .filter((item) => item.phonetics.length)
    .map((item) => item.phonetics.find((item) => item.audio !== "")?.audio)[0];

  const playAudio = () => {
    let audio = new Audio();
    audio.volume = 0.25;
    audio.src = audioSource;
    audio.play();
  };

  return (
    <div className="flex flex-col  mt-[3rem]">
      <div className="flex justify-between w-11/12 ms-8  ">
        <div>
          <p className="text-[50px] font-bold">{data[0].word}</p>
          <p className="text-[20px] text-[#A445ED]">{data[0].phonetic}</p>
        </div>
        <div
          className="w-[100px] h-[100px] rounded-full flex justify-center bg-gray-100 "
          onClick={playAudio}
        >
          <Image
            src="../images/icon-play.svg"
            width={20}
            height={20}
            alt="mi"
          />
        </div>
      </div>
      <div className="flex mt-[3rem] gap-x-2 items-center">
        <p className="text-[25px]">{data[0].meanings[0].partOfSpeech}</p>
        <hr className="border border-[#e2e1e1] w-full" />
      </div>
      <p className="text-[#e2e1e1] mt-[2rem]">Meaning</p>
      <ul className="mt-[2rem]">
        {data[0].meanings[0].definitions.map((item) => (
          <li>
            <strong>Definiton:</strong> {item.definition}
            <br />
            {item.example && (
              <>
                <strong>Example:</strong> {item.example}
                <br />
              </>
            )}
          </li>
        ))}
      </ul>
      <hr className="border border-[#e2e1e1] w-full mt-5 " />
      <div className="flex gap-x-2 mt-5">
        <p className="text-[#e2e1e1] ">Synonyms :</p>
        <div className="flex gap-x-1">
          {data[0].meanings[0].synonyms.map((item) => (
            <p>{item} /</p>
          ))}
        </div>
      </div>
      <p className="text-[#e2e1e1] mt-[2rem]">Source</p>
      <span>{data[0].sourceUrls}</span>
    </div>
  );
};

export default Meaning;
