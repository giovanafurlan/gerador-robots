import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Text,
  Textarea,
  Grid,
  InputGroup,
  InputLeftElement,
  Heading,
  InputRightElement,
  Container,
} from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import { BsSlashLg } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import CopyToClipboard from "react-copy-to-clipboard";

const options = [
  {
    nome: "Google",
    id: "Google",
  },
  {
    nome: "Baidu",
    id: "Baidu",
  },
  {
    nome: "Bing",
    id: "Bing",
  },
  {
    nome: "Moz Bot",
    id: "MozBot",
  },
  {
    nome: "WEBCEO",
    id: "WEBCEO",
  },
  {
    nome: "SEM RUSH",
    id: "SemRush",
  },
  {
    nome: "Yandex",
    id: "Yandex",
  },
  {
    nome: "AddThis",
    id: "AddThis",
  },
  {
    nome: "AhrefsBot",
    id: "AhrefsBot",
  },
  {
    nome: "BDCbot",
    id: "BDCbot",
  },
  {
    nome: "DirBuster",
    id: "DirBuster",
  },
  {
    nome: "EveryoneSocial",
    id: "EveryoneSocial",
  },
  {
    nome: "Exabot",
    id: "Exabot",
  },
  {
    nome: "LinkpadBot",
    id: "LinkpadBot",
  },
  {
    nome: "Slurp",
    id: "Slurp",
  },
  {
    nome: "Spbot",
    id: "Spbot",
  },
  {
    nome: "TwengaBot",
    id: "TwengaBot",
  },
  {
    nome: "MJ12bot",
    id: "MJ12bot",
  },
];

export default function GeradorRobots() {

  const caminhos = [];

  const [robots, setRobots] = useState(false);
  const [badbotInput, setBadbotInput] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      const cont = confirm("Você tem certeza que deseja permitir Bad Bots?");
      if (cont) {
        console.log("check");
      }
    }
    setBadbotInput((current) => !current);
  };

  const robotsContent = {
    Google: (permission) => `
    User-agent: Googlebot
    ${permission}: /
    User-agent: Googlebot-News
    ${permission}: /
    User-agent: Googlebot-Image/1.0
    ${permission}: /
    User-agent: Googlebot-Video/1.0
    ${permission}: /
    User-agent: SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;+http://www.google.com/bot.html)
    ${permission}: /
    User-agent: Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
    ${permission}: /
    User-agent: (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html)
    ${permission}: /
    User-agent: Mediapartners-Google${permission}: /
    ${permission}: /
    User-agent: AdsBot-Google (+http://www.google.com/adsbot.html)
    ${permission}: /
    User-agent: AdsBot-Google-Mobile-Apps
    ${permission}: /
  `,
    Baidu: (permission) => `
    User-agent: Baiduspider
    ${permission}: / 
    User-agent: Baiduspider-video
    ${permission}: / 
    User-agent: Baiduspider-image
    ${permission}: / 
    User-agent: Baiduspider+
    ${permission}: /
  `,
    Bing: (permission) => `
    User-agent: Bingbot
    ${permission}: /
  `,
    Webpeak: (permission) => `
    User-agent: Mozilla/5.0 (compatible; seo-audit-check-bot/1.0)
    ${permission}: /
    User-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36
    ${permission}: /
    User-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1
    ${permission}: /
    User-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36
    ${permission}: /
  `,
    WEBCEO: (permission) => `
    User-agent: Mozilla/5.0 (compatible; online-webceo-bot/1.0; +http://online.webceo.com)
    ${permission}: /
    User-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36
    ${permission}: /
    User-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1
    ${permission}: /
    User-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36
    ${permission}: /
  `,
    SemRush: (permission) => `
    User-agent: SiteAuditBot
    ${permission}: /
    User-agent: SemrushBot-BA
    ${permission}: /
    User-agent: SemrushBot-SI
    ${permission}: /
    User-agent: SemrushBot-SWA
    ${permission}: /
    User-agent: SemrushBot-CT
    ${permission}: /
    User-agent: SemrushBot-BM
    ${permission}: /
    User-agent: SplitSignalBot
  `,
    MozBot: (permission) => `
    User-agent: Rogerbot
    ${permission}: /
    User-agent: dotbot 
    ${permission}: /
  `,
    Yandex: (permission) => `
    User-agent: YandexImages
    ${permission}: /
    User-agent: Yandex
    ${permission}: /
  `,
    AddThis: (permission) => `
    User-agent: AddThis
    ${permission}: /
    User-agent: AddThis.com robot tech.support@clearspring.com
    ${permission}: /
  `,
    AhrefsBot: (permission) => `
    User-agent: AhrefsBot
    ${permission}: /
  `,
    BDCbot: (permission) => `
    User-agent: BDCbot
    ${permission}: /
  `,
    DirBuster: (permission) => `
    User-agent: DirBuster-0.12
    ${permission}: /
  `,
    EveryoneSocial: (permission) => `
    User-agent: EveryoneSocialBot
    ${permission}: /
  `,
    Exabot: (permission) => `
    User-agent: Exabot
    ${permission}: /
  `,
    LinkpadBot: (permission) => `
    User-agent: LinkpadBot
    ${permission}: /
  `,
    Slurp: (permission) => `
    User-agent: Slurp
    ${permission}: /
  `,
    Spbot: (permission) => `
    User-agent: spbot
    ${permission}: /
  `,
    TwengaBot: (permission) => `
    User-agent: TwengaBot
    ${permission}: /
    User-agent: TwengaBot-2.0
    ${permission}: /
  `,
    MJ12bot: (permission) => `
    User-agent: MJ12bot
    ${permission}: /
  `,
    Badbots: (permission) => `

    User-agent: duggmirror
    ${permission}: /
    User-agent: 360Spider
    ${permission}: /
    User-agent: asterias
    ${permission}: /
    User-agent: BackDoorBot/1.0
    ${permission}: /
    User-agent: Black Hole
    ${permission}: /
    User-agent: BlowFish/1.0
    ${permission}: /
    User-agent: BotALot
    ${permission}: /
    User-agent: BuiltBotTough
    ${permission}: /
    User-agent: Bullseye/1.0
    ${permission}: /
    User-agent: BunnySlippers
    ${permission}: /
    User-agent: Cegbfeieh
    ${permission}: /
    User-agent: CheeseBot
    ${permission}: /
    User-agent: CherryPicker
    ${permission}: /
    User-agent: CherryPickerElite/1.0
    ${permission}: /
    User-agent: CherryPickerSE/1.0
    ${permission}: /
    User-agent: CopyRightCheck
    ${permission}: /
    User-agent: cosmos
    ${permission}: /
    User-agent: Crescent
    ${permission}: /
    User-agent: Crescent Internet ToolPak HTTP OLE Control v.1.0
    ${permission}: /
    User-agent: DittoSpyder
    ${permission}: /
    User-agent: EmailCollector
    ${permission}: /
    User-agent: EmailSiphon
    ${permission}: /
    User-agent: EmailWolf
    ${permission}: /
    User-agent: EroCrawler
    ${permission}: /
    User-agent: ExtractorPro
    ${permission}: /
    User-agent: Foobot
    ${permission}: /
    User-agent: Harvest/1.5
    ${permission}: /
    User-agent: hloader
    ${permission}: /
    User-agent: httplib
    ${permission}: /
    User-agent: humanlinks
    ${permission}: /
    User-agent: InfoNaviRobot
    ${permission}: /
    User-agent: JennyBot
    ${permission}: /
    User-agent: Kenjin Spider
    ${permission}: /
    User-agent: Keyword Density/0.9
    ${permission}: /
    User-agent: LexiBot
    ${permission}: /
    User-agent: libWeb/clsHTTP
    ${permission}: /
    User-agent: LinkextractorPro
    ${permission}: /
    User-agent: LinkScan/8.1a Unix
    ${permission}: /
    User-agent: LinkWalker
    ${permission}: /
    User-agent: LNSpiderguy
    ${permission}: /
    User-agent: lwp-trivial
    ${permission}: /
    User-agent: lwp-trivial/1.34
    ${permission}: /
    User-agent: Mata Hari
    ${permission}: /
    User-agent: Microsoft URL Control - 5.01.4511
    ${permission}: /
    User-agent: Microsoft URL Control - 6.00.8169
    ${permission}: /
    User-agent: MIIxpc
    ${permission}: /
    User-agent: MIIxpc/4.2
    ${permission}: /
    User-agent: Mister PiX
    ${permission}: /
    User-agent: moget
    ${permission}: /
    User-agent: moget/2.1
    ${permission}: /
    User-agent: mozilla/4
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; BullsEye; Windows 95)
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; MSIE 4.0; Windows 95)
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; MSIE 4.0; Windows 98)
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; MSIE 4.0; Windows NT)
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; MSIE 4.0; Windows XP)
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; MSIE 4.0; Windows 2000)
    ${permission}: /
    User-agent: Mozilla/4.0 (compatible; MSIE 4.0; Windows ME)
    ${permission}: /
    User-agent: mozilla/5
    ${permission}: /
    User-agent: NetAnts
    ${permission}: /
    User-agent: NICErsPRO
    ${permission}: /
    User-agent: Offline Explorer
    ${permission}: /
    User-agent: Openfind
    ${permission}: /
    User-agent: Openfind data gathere
    ${permission}: /
    User-agent: ProPowerBot/2.14
    ${permission}: /
    User-agent: ProWebWalker
    ${permission}: /
    User-agent: QueryN Metasearch
    ${permission}: /
    User-agent: RepoMonkey
    ${permission}: /
    User-agent: RepoMonkey Bait & Tackle/v1.01
    ${permission}: /
    User-agent: RMA
    ${permission}: /
    User-agent: SiteSnagger
    ${permission}: /
    User-agent: SpankBot
    ${permission}: /
    User-agent: spanner
    ${permission}: /
    User-agent: suzuran
    ${permission}: /
    User-agent: Szukacz/1.4
    ${permission}: /
    User-agent: Teleport
    ${permission}: /
    User-agent: TeleportPro
    ${permission}: /
    User-agent: Telesoft
    ${permission}: /
    User-agent: The Intraformant
    ${permission}: /
    User-agent: TheNomad
    ${permission}: /
    User-agent: TightTwatBot
    ${permission}: /
    User-agent: Titan
    ${permission}: /
    User-agent: toCrawl/UrlDispatcher
    ${permission}: /
    User-agent: True_Robot
    ${permission}: /
    User-agent: True_Robot/1.0
    ${permission}: /
    User-agent: turingos
    ${permission}: /
    User-agent: URLy Warning
    ${permission}: /
    User-agent: VCI
    ${permission}: /
    User-agent: VCI WebViewer VCI WebViewer Win32
    ${permission}: /
    User-agent: Web Image Collector
    ${permission}: /
    User-agent: WebAuto
    ${permission}: /
    User-agent: WebBandit
    ${permission}: /
    User-agent: WebBandit/3.50
    ${permission}: /
    User-agent: WebCopier
    ${permission}: /
    User-agent: WebEnhancer
    ${permission}: /
    User-agent: WebmasterWorldForumBot
    ${permission}: /
    User-agent: WebSauger
    ${permission}: /
    User-agent: Website Quester
    ${permission}: /
    User-agent: Webster Pro
    ${permission}: /
    User-agent: WebStripper
    ${permission}: /
    User-agent: WebZip
    ${permission}: /
    User-agent: WebZip/4.0
    ${permission}: /
    User-agent: WhatWeb/0.4.7
    ${permission}: /
    User-agent: Wget
    ${permission}: /
    User-agent: Wget/1.5.3
    ${permission}: /
    User-agent: Wget/1.6
    ${permission}: /
    User-agent: WWW-Collector-E
    ${permission}: /
    User-agent: Xenu's
    ${permission}: /
    User-agent: Xenu's Link Sleuth 1.1c
    ${permission}: /
    User-agent: Zeus
    ${permission}: /
    User-agent: Zeus 32297 Webster Pro V2.9 Win32  
    ${permission}: /
  `,
  };

  function adicionarCaminho() {
    const path = document.querySelector(".path").value;
    if (path[0] !== "/") return;
    caminhos.push(path);

    renderizarCaminhos();
  }

  function removerCaminho(index) {
    caminhos.splice(Number(index), 1);

    renderizarCaminhos();
  }

  function renderizarCaminhos() {
    const createLiElement = () => document.createElement("GridItem");
    const createButtonElement = () => document.createElement("button");

    var listaDeCaminhos = " ";

    listaDeCaminhos = document.querySelector(".paths-ul");
    if (listaDeCaminhos != null) {
      listaDeCaminhos.style.display = "flex";
      listaDeCaminhos.style.flexWrap = "wrap";
      listaDeCaminhos.innerHTML = "";
    }

    caminhos.forEach((caminho, index) => {
      const li = createLiElement();
      li.style.marginRight = "10px";
      li.style.marginTop = "10px";
      li.style.padding = "4px 10px 4px 10px";
      li.style.backgroundColor = "#F3F5FA";
      li.style.color = "#7B61FF";
      li.style.border = "1px solid #F3F5FA";
      li.style.borderRadius = "5px";

      const button = createButtonElement();
      button.style.fontSize = "12px";
      button.style.marginLeft = "10px";
      button.style.color = "#7B61FF";

      li.innerHTML = caminho;
      button.innerHTML = "X";
      button.onclick = () => {
        removerCaminho(index);
      };

      li.appendChild(button);
      listaDeCaminhos.appendChild(li);
    });
  }

  function gerar() {
    const checkboxElementos = document.querySelectorAll(
      ".opcoes .checkbox input"
    );

    const sitemap = document.querySelector(".sitemap").value;
    const pathsBloqueadosInput = caminhos;
    
    const { permitidos, bloqueados } = gerarListaDeElementos(checkboxElementos);

    let auxiliar = ``;

    if (pathsBloqueadosInput[0]) {
      auxiliar += `User-agent: *\n`;
    }

    pathsBloqueadosInput.forEach((path) => {
      auxiliar += `Disallow: ${path} \n`;
    });

    permitidos.forEach((mecanismo) => {
      auxiliar += robotsContent[mecanismo]("Allow").replaceAll(" ", "");
    });

    bloqueados.forEach((mecanismo) => {
      auxiliar += robotsContent[mecanismo]("Disallow").replaceAll(" ", "");
    });

    if (
      sitemap.includes("https://") ||
      sitemap.includes("HTTPS://") ||
      sitemap.includes("http://") ||
      sitemap.includes("HTTP://") ||
      sitemap.includes("www.") ||
      sitemap.includes("WWW.")
    ) {
      auxiliar += `Sitemap: ${sitemap}\n`;
    }

    const robots = auxiliar.replaceAll(" ", "").replaceAll("\n\n", "\n");

    renderizarRobots(robots);
  }

  function renderizarRobots(robots) {
    const textarea = document.querySelector("#result");
    textarea.value = robots;
    setRobots(robots);
  }

  function gerarListaDeElementos(elementos) {
    const permitidos = [];
    const bloqueados = [];
    elementos.forEach((elemento) => {
      if (elemento.checked) {
        permitidos.push(elemento.name);
      } else {
        bloqueados.push(elemento.name);
      }
    });

    return {
      permitidos,
      bloqueados,
    };
  }

  return (
    <Container display={"flex"} flexDir={"column"} gap="6" maxW={"6xl"} py="6">
      <Flex align={"center"} gap="4" className="blocked-paths">
        <FormControl>
          <FormLabel>
            Insira Caminho
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              h="full"
              // eslint-disable-next-line react/no-children-prop
              children={<BsSlashLg />}
            />
            <Input
              className="path"
              type="text"
              pl="35px!important"
            />
          </InputGroup>
        </FormControl>
        <Button
          mt="6"
          onClick={adicionarCaminho}
          type="button"
        >
          Adicionar Caminho
        </Button>
      </Flex>
      <Box className="paths">
        <Text as="h2">Página Indexar</Text>
        <Box className="paths-ul"></Box>
      </Box>
      <Text as="h2">Mecanismo Busca</Text>
      <Grid
        templateColumns={{
          lg: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
        className="opcoes"
        gap="4"
      >
        {options.map((item, idx) => (
          <Option key={idx} nome={item.nome} id={item.id} />
        ))}
        <Flex flexDir={"column"}>
          <Flex className={"checkbox"} justifyContent={"space-between"}>
            <FormLabel fontSize={"md"} htmlFor={"Badbots"}>
              Bad Bots
            </FormLabel>
            <Checkbox
              onChange={handleChange}
              value={badbotInput}
              className="input"
              id={"Badbots"}
              name={"Badbots"}
              colorScheme="red"
              size="lg"
            />
          </Flex>
          <Divider />
        </Flex>
      </Grid>
      <Heading>Site Map</Heading>
      <FormControl className="form" fontSize={"x-large"}>
        <Flex flexDir={"column"} gap="8">
          <Flex gap="4" align={"center"}>
            {/* <Input
                className="sitemap"
                type="text"
                borderRadius={"30px"}
                borderColor={border}
                placeholder={t("insiraSiteMap")}
              /> */}
            <FormControl>
              <FormLabel>
                Insira SiteMap
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  h="full"
                  // eslint-disable-next-line react/no-children-prop
                  children={<MdHttp />}
                />
                <Input
                  className="sitemap"
                  type="text"
                  pl="35px!important"
                />
              </InputGroup>
            </FormControl>
            <Button
              mt="6"
              onClick={gerar}
              className="gerar-robots"
              id="gerar-robots"
              type="button"
            >
              Gerar Robots
            </Button>
          </Flex>
          <FormControl>
            <FormLabel htmlFor="result" display="none"></FormLabel>
            <InputGroup>
              {/* eslint-disable-next-line react/no-children-prop */}
              <InputLeftElement pointerEvents="none" children={<FaRobot />} />
              <Textarea
                pos={"relative"}
                id="result"
                borderRadius={"5px"}
                px="35px!important"
                p="10px"
                rows={10}
                spellCheck="false"
              />
              <InputRightElement
                cursor={"pointer"}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <CopyToClipboard text={robots}>
                    <BiCopy color="#5B1AB2" />
                  </CopyToClipboard>
                }
              />
            </InputGroup>
          </FormControl>
        </Flex>
      </FormControl>
    </Container>
  );
}

function Option({ nome, id }) {
  return (
    <Flex flexDir={"column"}>
      <Flex
        className={"checkbox"}
        justifyContent={"space-between"}
        align={"center"}
      >
        <FormLabel fontSize={"md"} htmlFor={id}>
          {nome}
        </FormLabel>
        <Checkbox
          className="input"
          id={id}
          name={id}
          size="lg"
          defaultChecked
        />
      </Flex>
      <Divider />
    </Flex>
  );
}
