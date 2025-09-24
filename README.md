[![Netlify Status](https://api.netlify.com/api/v1/badges/a112ed01-8ab0-476c-a3c5-12e6a2612d7f/deploy-status)](https://app.netlify.com/projects/netlifytomato/deploys)
# Netlify Portfolio Starter

간단한 정적 포트폴리오 템플릿입니다. GitHub에 푸시하고 Netlify에 연결하여 무료로 배포할 수 있습니다.

## 1) 로컬에서 미리보기
정적 사이트이므로 별도 빌드가 필요 없습니다. 파일을 더블클릭하거나 간단한 서버로 띄울 수 있습니다.

```bash
# 파이썬 내장 서버 예시 (선택)
python3 -m http.server 5173
# 브라우저: http://localhost:5173
```

## 2) GitHub에 푸시
1. 새 저장소 생성 (예: `netlify-portfolio-starter`)
2. 아래 명령으로 업로드:
```bash
git init
git add .
git commit -m "init: portfolio starter"
git branch -M main
git remote add origin https://github.com/<your-id>/netlify-portfolio-starter.git
git push -u origin main
```

## 3) Netlify에 연결 (콘솔 UI)
1. [Netlify](https://app.netlify.com) 로그인
2. **Add new site → Import an existing project**
3. **Git provider**로 GitHub 선택 후 저장소 연결
4. **Build command**: *(비워두기)*, **Publish directory**: `/` (루트)
5. **Deploy site** 클릭 → 몇 초 내 배포 완료
6. 자동으로 제공된 URL 확인 (예: `https://something.netlify.app`)

> 코드 변경 후 `main`에 푸시하면 자동으로 **Continuous Deployment(CD)** 가 동작하여 새 버전이 배포됩니다.

## 4) 폼 수집(Netlify Forms)
`index.html`의 `form`에 `data-netlify="true"`가 설정되어 있습니다. 제출된 항목은 **Netlify → Forms** 메뉴에서 확인할 수 있습니다.

## 5) 커스텀 도메인(선택)
**Site settings → Domain management**에서 사용자 도메인을 연결할 수 있습니다.

## 6) 파일 편집 포인트
- `index.html`: 이름/소개/프로젝트 링크 수정
- `styles.css`: 색상/레이아웃 조정
- `script.js`: 라이트/다크 전환, 모바일 메뉴
- `assets/profile.svg`: 프로필 일러스트
- `assets/resume.pdf`: 이력서 PDF 교체

---

_Last updated: 2025-09-23_
