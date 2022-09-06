interface XmMultiElem<T> {
  [index: number]: XmlElem<T>;

  ChildNum: number;

  /**
   * Возвращает документ, к которому относится данный объект.
   */
  Doc: XmlDocument;

  /**
   * Возвращает массив, указанный в атрибуте FOREIGN-ARRAY текущего элемента.
   */
  ForeignArray: unknown[];

  /**
   * Возвращает true если существует хоть один соответствующий множественный элемент.
   */
  HasValue: boolean;

  /**
   * Возвращает массив всех соответствующих множественных элементов.
   * Сам по себе данный метод не несет особого смысла, поскольку объект
   * XmlMultiElem сам является массивом, но, в сочетании с одноименным
   * методом объекта XmlElem позволяет создавать универсальный код для
   * работы как с обычными так и множественными элементами.
   * Пример:
   * array = candidate.profession_id.Instances возвращает массив из
   * всех элементов profession_id
   * array = candidate.location_id.Instances возвращает массив из
   * единственного элемента location_id
   */
  Instances: T[];

  /**
   * Всегда возвращает false.
   * Аналогичный метод объекта XmlElem всегда возвращает false.
   * Это позволяет по конструкции вида candidate.profession_id.IsMultiElem определять
   * был ли элемент profession_id описан c атрибутом MULTIPLE="1".
   */
  IsMultiElem: boolean;

  /**
   * Возвращает имя ссответствующего множественного элемента.
   */
  Name: string;

  /**
   * Возвращает родительский элемент текущего элемента.
   */
  Parent: XmlTopElem | Error;

  /**
   * Возвращает константу на языке XQuery в виде последовательности из значений соответствующих множественных элементов.
   */
  XQueryLiteral: string;

  /**
   * Добавляет дочерний элемент и возвращает указатель на него.
   * Если текущий элемент создан по форме, то он должен быть простым массивом. При этом аргументы для вызова функции не требуются.
   * Если текущий элемент является динамическим (т.е. построенным без формы), то добавляется дочерний динамический элемент с именем и типом, указанных в качестве аргументов.
   * @param {string} name - имя дочернего элемента (String). Необязательный аргумент
   * @param {string} type - тип дочернего элемента (String). Необязательный аргумент
   * @returns {XmlElem<T>}
   */
  Add(): XmlElem<T>;
  
  /**
   * Проверяет существует ли соответствующий множественный элемент с заданным значением.
   * @param value заданное значение
   */
  ByValueExists(value: any): Boolean;

  /**
   * Удаляет все соответствующие множественные элементы.
   */
  Clear(): void;

  /**
   * @deprecated
   * Удаляет все соответствующие множественные элементы.
   */
  DeleteAll(): void;

  /**
   * Удаляет соответствующий множественный элемент с заданным значением.
   * Если таких элементов несколько, удаляет первый.
   * @throws {@link Error} В случае отсутствия таких элементов возвращает ошибку.
   */
  DeleteByValue(): void | never;

  /**
   * Находит соответствующий множественный элемент с заданным значением ключевого поля.
   * Если такой элемент не найден, возвращает ошибку.
   * @param keyValue значение ключа
   * @param keyName имя элемента, являющегося ключом (String).  
   * Необязательный аргумент.  
   * Если имя ключа не указано, используется первичный ключ.
   * @returns Объект XmlElem
   */
  GetByKey(keyValue: any, keyName?: string): XmlElem<T>;

  /**
   * Ищет соответствующий множественный элемент с заданным ключевым элементом.
   * Если не находит, то добавляет новый дочерний элемент, и его ключевому полю присваивает заданное значение. Возвращает ранее существовавший или вновь созданный дочерний элемент.
   * @param keyValue значение ключа
   * @param keyName имя элемента, являющегося ключом (String).  
   * Необязательный аргумент.  
   * Если имя ключа не указано, используется первичный ключ
   * @returns Объект XmlElem
   */
  ObtainByKey(keyValue: any, keyName?: string): XmlElem<T>;

  /**
   * Находит элемент, относящийся к данному объекту по ключу.
   * В случае его отсутствия, добавляет элемент в соответствующую позицию по возрастанию ключа.
   * @param keyValue значение ключа
   * @param keyName имя элемента, являющегося ключом (String).  
   * Необязательный аргумент.  
   * Если имя ключа не указано, используется первичный ключ
   * @returns Объект XmlElem
   */
  ObtainByKeySorted(keyValue: any, keyName: string): XmlElem<T>;

  /**
   * Ищет соответствующий множественный элемент с заданным значением. Если не находит, добавляет новый элемент и присваивает ему заданное значение.
   * @param value значение элемента
   */
  ObtainByValue(value: any): XmlElem<T>;

  AddChild(name?: string, type?: string): XmlElem<T>;
  AssignElem(element: unknown): void;
  Child(index: string | number): XmlElem<T>;
  DeleteChildByKey(keyValue: unknown, keyName?: string): void;
  /**
   * Удаляет все дочерние элементы, удовлетворяющие заданому условию.
   * @param qualExpr - строка, содержащая выражение (условие),
   * вычисляемое относительно каждого значения элемента (String).
   * Необязательный аргумент. Если выражение не указано, удаляются все дочерние элементы.
   */
  DeleteChildren(qualExpr: string): void;
  GetChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  GetOptChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  ObtainChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  OptChild(name: string): XmlElem<T>;
}

type XmlMultiElem<T> = XmMultiElem<T> & T;
