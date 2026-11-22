import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Add any country name here to hide it from the page without touching the lists below.
const HIDDEN = [];

const SEAPORTS = `Algeria|Algiers, Oran, Bejaia, Annaba, Skikda
Angola|Luanda, Lobito, Namibe, Soyo
Argentina|Buenos Aires, Rosario, Bahia Blanca, Mar del Plata
Australia|Melbourne, Sydney, Brisbane, Fremantle, Adelaide, Darwin, Newcastle, Townsville
Bahamas|Freeport, Nassau
Bahrain|Khalifa Bin Salman, Mina Salman
Bangladesh|Chattogram, Mongla, Payra
Barbados|Bridgetown
Belgium|Antwerp-Bruges, Zeebrugge, Ghent
Belize|Belize City, Big Creek
Benin|Cotonou
Brazil|Santos, Paranagua, Rio de Janeiro, Itajai, Rio Grande, Vitoria, Suape, Salvador
Brunei|Muara
Bulgaria|Varna, Burgas
Cambodia|Sihanoukville, Phnom Penh (river port)
Cameroon|Douala, Kribi, Limbe
Canada|Vancouver, Montreal, Halifax, Prince Rupert, Saint John, Quebec
Chile|San Antonio, Valparaiso, Iquique, Antofagasta, Talcahuano
China|Shanghai, Ningbo-Zhoushan, Shenzhen, Guangzhou, Qingdao, Tianjin, Xiamen, Dalian
Colombia|Cartagena, Buenaventura, Barranquilla, Santa Marta
Comoros|Moroni, Mutsamudu
Costa Rica|Limon, Moin, Caldera
Croatia|Rijeka, Split, Ploce, Zadar
Cuba|Havana, Mariel, Santiago de Cuba, Cienfuegos
Cyprus|Limassol, Larnaca
Democratic Republic of the Congo|Matadi, Boma
Denmark|Aarhus, Copenhagen, Fredericia, Esbjerg
Djibouti|Djibouti, Doraleh
Dominica|Roseau, Portsmouth
Dominican Republic|Caucedo, Rio Haina, Santo Domingo, Puerto Plata
Ecuador|Guayaquil, Posorja, Manta, Esmeraldas
Egypt|Alexandria, Port Said, Damietta, Ain Sokhna, El Dekheila
El Salvador|Acajutla, La Union
Estonia|Tallinn, Muuga, Paldiski
Fiji|Suva, Lautoka
Finland|Helsinki, HaminaKotka, Turku, Rauma
France|Le Havre, Marseille-Fos, Dunkirk, Nantes-Saint-Nazaire, Bordeaux, Calais
Gabon|Owendo, Port-Gentil
Gambia|Banjul
Georgia|Poti, Batumi
Germany|Hamburg, Bremerhaven, Wilhelmshaven, Rostock
Ghana|Tema, Takoradi
Greece|Piraeus, Thessaloniki, Patras, Heraklion
Grenada|St. George’s
Guatemala|Puerto Quetzal, Santo Tomas de Castilla, Puerto Barrios
Guinea|Conakry, Kamsar
Guyana|Georgetown, New Amsterdam
Haiti|Port-au-Prince, Cap-Haitien
Honduras|Puerto Cortes, San Lorenzo, La Ceiba
Iceland|Reykjavik, Akureyri, Grundartangi
Indonesia|Tanjung Priok, Tanjung Perak, Belawan, Makassar, Tanjung Emas, Patimban
Iran|Bandar Abbas, Chabahar, Imam Khomeini, Bushehr
Iraq|Umm Qasr, Khor Al Zubair
Ireland|Dublin, Cork, Shannon Foynes, Waterford
Israel|Haifa, Ashdod, Eilat
Italy|Genoa, La Spezia, Trieste, Naples, Gioia Tauro, Venice, Livorno
Jamaica|Kingston, Montego Bay, Ocho Rios
Japan|Tokyo, Yokohama, Osaka, Kobe, Nagoya, Hakata, Shimizu
Jordan|Aqaba
Kenya|Mombasa, Lamu, Kilindini
Kiribati|Betio
Kuwait|Shuwaikh, Shuaiba, Mubarak Al Kabeer
South Korea|Busan, Incheon, Gwangyang, Ulsan, Pyeongtaek-Dangjin
Latvia|Riga, Ventspils, Liepaja
Lebanon|Beirut, Tripoli
Liberia|Monrovia, Buchanan
Libya|Tripoli, Misrata, Benghazi, Tobruk
Lithuania|Klaipeda
Madagascar|Toamasina, Mahajanga, Antsiranana, Toliara
Malaysia|Port Klang, Tanjung Pelepas, Penang, Johor, Bintulu, Kuantan
Maldives|Male
Malta|Marsaxlokk, Valletta
Mauritania|Nouakchott, Nouadhibou
Mauritius|Port Louis
Mexico|Manzanillo, Veracruz, Lazaro Cardenas, Altamira, Ensenada
Monaco|Port Hercule
Montenegro|Bar, Kotor
Morocco|Tanger Med, Casablanca, Agadir, Jorf Lasfar, Mohammedia
Mozambique|Maputo, Beira, Nacala, Pemba
Myanmar|Yangon, Thilawa, Sittwe
Namibia|Walvis Bay, Luderitz
Nauru|Aiwo
Netherlands|Rotterdam, Amsterdam, Moerdijk
New Zealand|Auckland, Tauranga, Wellington, Lyttelton, Napier
Nicaragua|Corinto, Puerto Sandino
Nigeria|Apapa, Tin Can Island, Onne, Port Harcourt, Lekki
Norway|Oslo, Bergen, Stavanger, Trondheim, Narvik
Oman|Sohar, Salalah, Duqm, Sultan Qaboos
Pakistan|Karachi, Port Qasim, Gwadar
Panama|Balboa, Colon, Manzanillo International Terminal, Cristobal
Papua New Guinea|Port Moresby, Lae, Madang
Peru|Callao, Paita, Matarani, Ilo
Philippines|Manila, Cebu, Davao, Subic Bay, Batangas, Cagayan de Oro
Poland|Gdansk, Gdynia, Szczecin, Swinoujscie
Portugal|Lisbon, Leixoes, Sines, Setubal
Qatar|Hamad, Ras Laffan, Mesaieed
Romania|Constanta, Galati, Braila
Russia|Saint Petersburg, Novorossiysk, Vladivostok, Murmansk, Kaliningrad, Vostochny
Saint Kitts and Nevis|Basseterre, Charlestown
Saint Lucia|Castries, Vieux Fort
Saint Vincent and the Grenadines|Kingstown
Samoa|Apia
Sao Tome and Principe|Sao Tome
Saudi Arabia|Jeddah Islamic Port, King Abdulaziz, King Abdullah, Jubail, Yanbu, Jazan
Senegal|Dakar
Seychelles|Victoria
Sierra Leone|Freetown
Singapore|Singapore, Pasir Panjang, Tuas
Slovenia|Koper
Solomon Islands|Honiara
Somalia|Mogadishu, Berbera, Bosaso
South Africa|Durban, Cape Town, Ngqura, Gqeberha, Richards Bay, Saldanha Bay
Spain|Valencia, Barcelona, Algeciras, Bilbao, Malaga, Tarragona
Sri Lanka|Colombo, Hambantota, Trincomalee
Sudan|Port Sudan, Suakin
Suriname|Paramaribo, Nieuw Nickerie
Sweden|Gothenburg, Stockholm, Helsingborg, Malmo, Norrkoping
Taiwan|Kaohsiung, Keelung, Taichung, Taipei
Tanzania|Dar es Salaam, Tanga, Mtwara
Thailand|Laem Chabang, Bangkok, Map Ta Phut, Songkhla
Timor-Leste|Dili, Tibar
Togo|Lome
Tonga|Nuku’alofa
Trinidad and Tobago|Port of Spain, Point Lisas, Scarborough
Tunisia|Rades, Sfax, Bizerte, Sousse
Türkiye (Turkey)|Ambarli, Istanbul, Izmir, Mersin, Gemlik, Tekirdag
Ukraine|Odesa, Chornomorsk, Pivdennyi, Mykolaiv
United Arab Emirates|Jebel Ali, Khalifa, Fujairah, Sharjah, Khor Fakkan, Mina Zayed
United Kingdom|Felixstowe, Southampton, London Gateway, Liverpool, London, Tilbury, Immingham
United States of America|Los Angeles, Long Beach, New York and New Jersey, Houston, Savannah, Seattle, Miami, Charleston, Oakland, Norfolk
Uruguay|Montevideo, Nueva Palmira
Vanuatu|Port Vila, Luganville
Venezuela|Puerto Cabello, La Guaira, Maracaibo, Guanta
Vietnam|Ho Chi Minh City, Cai Mep-Thi Vai, Hai Phong, Da Nang, Quy Nhon
Yemen|Aden, Hodeidah, Mukalla`;

const LANDLOCKED = `Afghanistan|Karachi, Port Qasim, Bandar Abbas
Armenia|Poti, Batumi
Austria|Hamburg, Koper, Rotterdam
Azerbaijan|Poti, Batumi
Belarus|Klaipeda, Riga
Bhutan|Kolkata, Haldia, Visakhapatnam
Bolivia|Arica, Iquique
Botswana|Durban, Walvis Bay
Burkina Faso|Abidjan, Tema, Lome
Burundi|Dar es Salaam, Mombasa
Central African Republic|Douala, Pointe-Noire
Chad|Douala, Cotonou
Czech Republic|Hamburg, Rotterdam
Eswatini|Durban, Maputo
Ethiopia|Djibouti, Berbera
Hungary|Koper, Hamburg, Rotterdam
Kazakhstan|Aktau, Kuryk
Kyrgyzstan|Bandar Abbas, Karachi
Laos|Laem Chabang, Da Nang
Lesotho|Durban, Port Elizabeth
Liechtenstein|Rotterdam, Hamburg
Malawi|Beira, Nacala
Mali|Dakar, Abidjan, Tema
Moldova|Constanta, Giurgiulesti
Mongolia|Tianjin, Qingdao
Nepal|Kolkata, Haldia, Visakhapatnam
Niger|Cotonou, Lome
North Macedonia|Thessaloniki, Durres
Paraguay|Buenos Aires, Montevideo
Rwanda|Dar es Salaam, Mombasa
San Marino|Ravenna, Ancona
Serbia|Rijeka, Thessaloniki
Slovakia|Hamburg, Koper
South Sudan|Port Sudan, Mombasa
Switzerland|Rotterdam, Hamburg, Genoa
Tajikistan|Bandar Abbas, Karachi
Turkmenistan|Bandar Abbas, Karachi
Uganda|Mombasa, Dar es Salaam
Uzbekistan|Bandar Abbas, Karachi
Zambia|Durban, Beira, Dar es Salaam
Zimbabwe|Durban, Beira, Maputo`;

const parse = (text) =>
  text
    .trim()
    .split('\n')
    .map((line) => {
      const [name, ports] = line.split('|');
      return { name: name.trim(), ports: ports.split(',').map((p) => p.trim()) };
    })
    .filter((c) => !HIDDEN.includes(c.name))
    .sort((a, b) => a.name.localeCompare(b.name));

const DATA = { sea: parse(SEAPORTS), land: parse(LANDLOCKED) };

const TABS = [
  { id: 'sea', label: 'Coastal countries' },
  { id: 'land', label: 'Landlocked countries' },
];

export default function Destinations() {
  const [tab, setTab] = useState('sea');
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = DATA[tab].filter(
      (c) => !q || c.name.toLowerCase().includes(q) || c.ports.some((p) => p.toLowerCase().includes(q))
    );
    const map = new Map();
    list.forEach((c) => {
      const letter = c.name[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter).push(c);
    });
    return [...map.entries()];
  }, [tab, query]);

  const count = groups.reduce((n, [, items]) => n + items.length, 0);

  return (
    <>
      <section className="page-hero" aria-label="Destinations">
        <div className="wrap">
          <div className="eyebrow">Where we ship</div>
          <h1>Destinations and ports.</h1>
          <p>Find your country and the seaports we ship to. Not listed, or need a different port? Ask us and we will confirm.</p>
        </div>
      </section>

      <section className="section dest-section">
        <div className="wrap">
          <div className="dest-controls">
            <div className="dest-tabs" role="tablist" aria-label="Country type">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  className={tab === t.id ? 'is-active' : ''}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <input
              className="dest-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a country or port"
              aria-label="Search a country or port"
            />
          </div>

          <p className="dest-count" aria-live="polite">
            {count} {count === 1 ? 'country' : 'countries'}
            {tab === 'land' ? ' · shipped through the seaports shown' : ''}
          </p>

          {groups.length === 0 && (
            <div className="dest-empty">
              <p>No match for “{query}”. Check the spelling, or tell us where you need goods delivered.</p>
              <Link className="btn dark" to="/contact">Ask about your country</Link>
            </div>
          )}

          {groups.map(([letter, items]) => (
            <div className="dest-group" key={letter}>
              <h2 className="dest-letter">{letter}</h2>
              <div className="dest-grid">
                {items.map((c) => (
                  <article className="dest-card" key={c.name}>
                    <h3>{c.name}</h3>
                    <ul>
                      {c.ports.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="dest-cta">
            <p>Tell us your product and destination port and we will send a shipping plan.</p>
            <Link className="btn cta" to="/contact">Start an enquiry &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
