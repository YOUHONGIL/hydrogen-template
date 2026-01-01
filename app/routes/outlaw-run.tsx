import type {MetaFunction} from '@shopify/remix-oxygen';

export const meta: MetaFunction = () => {
  return [
    {title: 'The Outlaw Run | Game Concept'},
    {
      name: 'description',
      content:
        'Arcade chase design with weapons, items, and progressive difficulty.',
    },
  ];
};

const weaponKeybinds = [
  {
    name: '기본 사격',
    key: 'Space',
    effect: '전방의 목표를 폭발시켜 추격 간격을 벌립니다.',
  },
  {
    name: '지뢰 설치',
    key: 'U',
    effect: '뒤로 지뢰를 떨어뜨려 밟는 경찰차를 즉시 폭발시킵니다.',
  },
  {
    name: '전방위 필살기',
    key: 'O (쿨타임 10초)',
    effect: '주변 360°에 탄환을 뿌려 근접 경찰차를 일괄 제거합니다.',
  },
];

const itemList = [
  {
    title: '니트로 (부스터)',
    role: '이동',
    effect:
      '순간 가속으로 한계 속도를 돌파하며 포위망을 탈출하고, 일반 차량을 튕겨내면서 길을 엽니다.',
  },
  {
    title: '바나나 껍질',
    role: '방해',
    effect:
      '폭발 대신 미끄러뜨려 경찰차의 조향을 꼬이게 만들고, 뒤따르는 차량끼리 충돌을 유도합니다.',
  },
  {
    title: '실드 (방어막)',
    role: '방어',
    effect:
      '일정 시간 충돌·사격 데미지를 무시하며, 리스크 없이 돌파하거나 아이템 상자를 노릴 수 있게 합니다.',
  },
  {
    title: '유도 미사일',
    role: '공격',
    effect:
      '가장 가까운 경찰차를 자동 추적해 폭파하여 긴급한 위험을 제거합니다.',
  },
  {
    title: '장갑차 변신',
    role: '업그레이드',
    effect:
      '느리지만 접촉하는 모든 차량을 박살내며 길을 열 수 있는 바디체크형 변신입니다.',
  },
  {
    title: '스포츠카 변신',
    role: '업그레이드',
    effect:
      '가속과 최고 속도가 크게 올라 경찰을 따돌리고 기동전을 이어갈 수 있습니다.',
  },
  {
    title: '거대화 아이템',
    role: '업그레이드',
    effect:
      '차량이 커져 주변 모든 차를 밟고 지나갈 수 있으며, 부딪혀도 속도를 거의 잃지 않습니다.',
  },
];

export default function OutlawRunPage() {
  return (
    <main className="outlaw-run">
      <section className="hero">
        <p className="eyebrow">게임 기획서</p>
        <h1>THE OUTLAW RUN</h1>
        <p className="lede">
          끝없이 쫓아오는 경찰을 따돌리며, 공격·함정·아이템을 활용해 최대한 오래
          생존하는 아케이드 체이스 게임 콘셉트입니다.
        </p>
        <div className="badge-row">
          <span className="badge">생존</span>
          <span className="badge">파괴</span>
          <span className="badge">아이템전</span>
        </div>
      </section>

      <section className="panel-grid">
        <article>
          <h2>핵심 플레이 루프</h2>
          <ul>
            <li>
              시간이 지날수록 더 많은 경찰차와 튼튼한 장갑차가 등장합니다.
            </li>
            <li>
              경찰은 NavMesh 기반 추격과 근접 시 돌진 충돌을 혼합해 압박합니다.
            </li>
            <li>
              도로 위 일반 시민 차량(NPC)은 방해물 겸 폭발 트리거로 활용됩니다.
            </li>
            <li>생존 시간과 파괴한 차량 수에 따라 점수가 누적됩니다.</li>
          </ul>
        </article>
        <article>
          <h2>게임 오버 조건</h2>
          <ul>
            <li>
              경찰차에 포위되어 속도가 0이 되거나 체력이 모두 소진될 때 종료.
            </li>
            <li>
              고속 충돌 시 더 큰 피해를 입지만, 실드·변신 상태라면 피해를
              경감합니다.
            </li>
            <li>아이템과 필살기 사용 타이밍이 장기 생존의 핵심 전략입니다.</li>
          </ul>
        </article>
        <article>
          <h2>시간 비례 난이도</h2>
          <ul>
            <li>
              1분 경과 시 경찰 생성 속도가 2배로 증가하고 장갑 경찰차가
              합류합니다.
            </li>
            <li>
              3분 이후에는 아이템 상자 리스폰 간격이 짧아지지만 경찰 포위 패턴이
              강화됩니다.
            </li>
            <li>
              긴박함을 유지하기 위해 추격 속도 상승과 포위 진입 각도를
              주기적으로 조정합니다.
            </li>
          </ul>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>조작 및 기본 무장</h2>
          <p className="note">
            기본 운전에 더해 세 가지 공격 수단을 코어 루프로 배치했습니다.
          </p>
        </div>
        <div className="table">
          <div className="table-head">
            <span>기능</span>
            <span>키 바인딩</span>
            <span>효과</span>
          </div>
          {weaponKeybinds.map((weapon) => (
            <div key={weapon.name} className="table-row">
              <span className="cell-strong">{weapon.name}</span>
              <span>{weapon.key}</span>
              <span>{weapon.effect}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>아이템 상자 시스템</h2>
          <p className="note">
            도로 곳곳에 리스폰되는 상자를 먹으면 무작위 아이템이 슬롯에
            저장되며, Shift/Ctrl로 사용합니다. 상자는 일정 시간 후 다시
            생성됩니다.
          </p>
        </div>
        <div className="item-grid">
          {itemList.map((item) => (
            <article key={item.title} className="item-card">
              <p className="eyebrow">{item.role}</p>
              <h3>{item.title}</h3>
              <p>{item.effect}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>구현 팁 (Unity/Unreal)</h2>
          <p className="note">
            제안한 기능을 빠르게 프로토타이핑할 때 참고할 수 있는 구현
            힌트입니다.
          </p>
        </div>
        <ul className="hint-list">
          <li>
            <strong>NavMesh 추격 + 돌진 AI</strong>: 일정 거리 내 접근 시
            에이전트 속도를 높이고, 충돌 이벤트에서 플레이어 속도 감소 및 피해를
            처리합니다.
          </li>
          <li>
            <strong>필살기(OverlapSphere)</strong>: O 키 입력 시 범위 내
            경찰차를 검색해 Explode()를 호출하고 쿨타임 UI를 갱신합니다.
          </li>
          <li>
            <strong>지뢰/바나나 트랩</strong>: 플레이어 뒤 -transform.forward
            지점에 프리팹을 생성하고, OnTriggerEnter로 경찰 태그를 감지해 폭발
            또는 Spin-out 상태를 적용합니다.
          </li>
          <li>
            <strong>부스터 연출</strong>: FOV 확장, 모션 블러, 차량 후미 화염
            파티클을 함께 사용해 체감 속도를 극대화합니다.
          </li>
          <li>
            <strong>변신·거대화</strong>: 일정 시간 동안 컬라이더/모델을
            교체하고, 이동/체력/피해량 스탯을 버프하는 임시 상태로 관리합니다.
          </li>
        </ul>
      </section>
    </main>
  );
}
