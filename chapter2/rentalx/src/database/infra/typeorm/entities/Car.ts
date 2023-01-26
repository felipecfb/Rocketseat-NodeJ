import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('cars')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'numeric' })
  daily_rate: number;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @Column({ type: 'varchar' })
  license_plate: string;

  @Column({ type: 'numeric' })
  fine_amount: number;

  @Column({ type: 'varchar' })
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ type: 'varchar' })
  category_id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
