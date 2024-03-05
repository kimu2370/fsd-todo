# React + TypeScript + Vite + tailwind + shadcn-ui + FSD

# FSD 방법론을 따른 폴더 구조

각각의 폴더들은 위계질서가 존재하며 쓰여진 순서대로 Top은 down들을 import해서 쓸 수 있지만,
down은 top을 import해서 사용할 수 없다.

각 레이어 안에는 slices들이 존재하며 보통 '도메인'이라고 불리는 것들이 존재하게 된다.
slices의 주요 목표는 그룹화하는 것이다.

slices들 안에는 segments들이 존재하고 그 목적에 따라 사용하게 된다.
`ex. ui, model, api, lib, config, constants`

`app/`

- 애플리케이션 진입점
- 전역 상태 관리, 라우팅 설정, providers 등 설정 관련 내용들이 들어간다.

`pages/`

- 애플리케이션 각 페이지
- 하나 이상의 `features/`를 조합하여 페이지를 구성
- 사용자에게 직접 노출되는 뷰를 정의한다.

`widgets/`

- 여러 기능이나 페이지에서 공통적으로 사용될 수 있는 UI 컴포넌트
- 재사용성이 높은 UI 요소들로 구성

`features/`

- 개별 기능별로 분리된 모듈
- 해당 기능에 필요한 UI, 비즈니스 로직, 상태 관리 등이 포함된다.
- ex) `<Button /> + <Card /> + entitiy + store => <Task />`

`entities/`

- 비즈니스 로직이과 데이터 모델을 정의하는 곳
- 여러 `features/features`에 걸쳐 공유될 수 있고, 도메인 중심의 설계를 지원한다.

`shared/`

- 공통 리소스 모음
- 유틸리티 함수, 공통 스타일, 상수 정의 등이 이에 해당된다.

### memo note

도메인 중심의 설계

- "도메인"은 비즈니스 로직, 데이터, 그리고 이를 조작하는 규칙들을 포함하는, 앱의 핵심 기능 영역을 의미한다.

**ex-제품(Product) 엔티티**

`entities/product/model.ts`

```typescript
// 제품 데이터와 관련된 타입 정의
export interface Product {
  id: string;
  name: string;
  price: number;
}

// 제품과 관련된 기능을 제공하는 객체 또는 클래스
class ProductEntity {
  private products: Product[] = []; // 예시 데이터

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  // 추가적인 제품 관련 비즈니스 로직 구현
}

export const productEntity = new ProductEntity();
```
